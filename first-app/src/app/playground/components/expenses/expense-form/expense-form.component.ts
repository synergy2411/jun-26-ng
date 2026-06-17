import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  output,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Expense } from '../../../../model/expense';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent implements OnInit {
  @Input() expense!: Expense;

  @Output()
  newExpenseEvent = new EventEmitter<Expense>();

  @Output()
  closeEvent = new EventEmitter();

  expenseForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.expenseForm = this.fb.group({
      title: new FormControl(),
      amount: new FormControl(),
      createdAt: new FormControl(),
    });
  }

  ngOnInit(): void {
    if (this.expense) {
      this.expenseForm.patchValue({
        title: this.expense.title,
        amount: this.expense.amount,
        createdAt: this.expense.createdAt,
      });
    }
  }

  onSubmit() {
    let newExpense = {
      ...this.expenseForm.value,
      createdAt: new Date(this.expenseForm.value.createdAt),
    };
    if (this.expense) {
      newExpense.id = this.expense.id;
    }
    this.newExpenseEvent.emit(newExpense);
  }

  onClose() {
    this.closeEvent.emit();
  }
}
