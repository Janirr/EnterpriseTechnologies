import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { signal } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent {
  categoryForm: FormGroup;
  submissionStatus = signal<string | null>(null);

  constructor(private fb: FormBuilder, private categoryService: CategoryService) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  addCategory() {
    if (this.categoryForm.valid) {
      const categoryName = this.categoryForm.value.name;
      this.categoryService.addCategory({ id: undefined, name: categoryName }).subscribe({
        next: () => {
          this.submissionStatus.set('Kategoria została dodana!');
          this.categoryForm.reset();
        },
        error: () => this.submissionStatus.set('Błąd przy dodawaniu kategorii.'),
      });
    }
  }
}