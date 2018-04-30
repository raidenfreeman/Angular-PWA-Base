import { Component, OnInit } from "@angular/core";
import { Category } from "../../model";
import { CategoriesService } from "../../services";
import {
  FormBuilder,
  Form,
  Validators,
  FormGroup,
  FormControl,
  FormArray
} from "@angular/forms";
import { Question } from "../../model/question";

@Component({
  selector: "app-question-add-update",
  templateUrl: "./question-add-update.component.html",
  styleUrls: ["./question-add-update.component.css"]
})
export class QuestionAddUpdateComponent implements OnInit {
  questionForm: FormGroup;
  categories: Category[];
  question: Question;

  constructor(
    private categoryService: CategoriesService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.question = new Question();
    this.categoryService
      .getCategories()
      .subscribe(res => (
        this.categories = res));
    this.questionForm = this.createForm(this.question);
  }

  createForm(question: Question): FormGroup {
    let fgs: FormGroup[] = question.answers.map(answer => {
      let fg = new FormGroup({
        answerText: new FormControl(answer.answerText, Validators.required),
        correct: new FormControl(answer.correct)
      });
      return fg;
    });
    let answersFA = new FormArray(fgs);
    let fcs: FormControl[] = question.tags.map(tag => {
      let fc = new FormControl(tag);
      return fc;
    });
    if (fcs.length == 0) {
      fcs = [new FormControl("")];
    }
    let tagsFA = new FormArray(fcs);
    return this.fb.group({
      category: [
        question.categories.length > 0 ? question.categories[0] : "",
        Validators.required
      ],
      questionText: [question.questionText, Validators.required],
      tags: "",
      tagsArray: tagsFA,
      answers: answersFA
    });
  }
  get answers(): FormArray {
    return this.questionForm.get("answers") as FormArray;
  }
}
