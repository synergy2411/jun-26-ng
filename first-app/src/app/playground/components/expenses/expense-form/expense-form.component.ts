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
      id: new FormControl(),
      title: new FormControl(),
      amount: new FormControl(),
      createdAt: new FormControl(),
    });
  }

  ngOnInit(): void {
    if (this.expense) {
      // yyyy-mm-dd
      const toFormat = new Date(this.expense.createdAt);
      const year = toFormat.getFullYear();
      const day = toFormat.toLocaleString('en-US', {
        day: 'numeric',
      });
      const month = toFormat.toLocaleString('en-US', {
        month: '2-digit',
      });
      const formattedDate = `${year}-${month}-${day}`;

      this.expenseForm.patchValue({
        id: this.expense.id,
        title: this.expense.title,
        amount: this.expense.amount,
        createdAt: formattedDate,
      });
    }
  }

  onSubmit() {
    let newExpense = {
      ...this.expenseForm.value,
      createdAt: new Date(this.expenseForm.value.createdAt),
    };
    this.newExpenseEvent.emit(newExpense);
  }

  onClose() {
    this.closeEvent.emit();
  }
}
