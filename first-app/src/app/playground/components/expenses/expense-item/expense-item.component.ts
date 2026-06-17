import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Expense } from '../../../../model/expense';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrl: './expense-item.component.css',
})
export class ExpenseItemComponent {
  @Input() expense!: Expense;

  @Output()
  deleteEvent = new EventEmitter<string>();

  @Output()
  editEvent = new EventEmitter<Expense>();

  onDelete() {
    if (
      confirm(
        'Are you sure to delete this expense - ' +
          this.expense.title.toUpperCase(),
      )
    )
      this.deleteEvent.emit(this.expense.id);
  }

  onEdit() {
    this.editEvent.emit(this.expense);
  }
}
