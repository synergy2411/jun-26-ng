import { Component, inject, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../../model/expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent implements OnInit {
  service = inject(ExpenseService);
  expenseCollection!: Expense[];
  showForm = false;
  editExpense!: Expense | null;

  ngOnInit(): void {
    this.service
      .fetchAll()
      .subscribe((expenses) => (this.expenseCollection = expenses));
  }

  onDelete(expenseId: string) {
    this.service.delete(expenseId).subscribe(() => {
      this.expenseCollection = this.expenseCollection.filter(
        (exp) => exp.id !== expenseId,
      );
    });
  }

  addNewExpense(expense: Expense) {
    if (this.editExpense) {
      this.service.update(expense).subscribe((newExpense) => {
        const position = this.expenseCollection.findIndex(
          (exp) => exp.id === newExpense.id,
        );
        this.expenseCollection[position] = newExpense;
      });
    } else {
      this.service.create(expense).subscribe((newExpense) => {
        this.expenseCollection = [newExpense, ...this.expenseCollection];
      });
    }
    this.showForm = false;
  }

  onEdit(expense: Expense) {
    this.showForm = true;
    this.editExpense = expense;
  }

  onCloseForm() {
    this.showForm = false;
    this.editExpense = null;
  }
}
