import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular Form Validation Tutorial";
  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    console.log("AppComponent::constructor");
    this.createForm();
  }

  createForm() {
    console.log("AppComponent::createForm");
    this.angForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(5)]],
      surname: ["", Validators.required]
    });

    this.angForm.controls["name"].valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  onSubmit() {
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    } else {
      alert("ERROR!");
    }
  }
} // FIN class
