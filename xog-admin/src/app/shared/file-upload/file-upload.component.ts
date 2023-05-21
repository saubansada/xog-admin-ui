import { HttpClient, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { NgxSpinnerService } from 'ngx-spinner';
import { ResponseObject } from 'src/app/models/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'xog-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FileUploadComponent
    }
  ]
})
export class FileUploadComponent implements ControlValueAccessor, Validator, OnInit {

  @Input() uploadUrl!: string;

  @Input() maxFiles: number = 1;

  @Input() storageType!: "product" | "category" | "subcategory" | "brand" | "offerbanner";

  uploadServerUrl: string = environment.uploadsUrl;

  fileNames: string[] = [];

  @Input() id: string = "" + Math.random();

  loadSpinner: string = "uploader_" + this.id;

  previewImages: any[] = [];

  onChange = (fileNames: string[]) => {
    this.fileNames = fileNames;
    this.previewImages = fileNames.map(item => {
      return {
        src: item,
        percent: '100%',
        complete: true,
      }
    })
  };

  onTouched = () => { };

  touched = false;

  disabled = false;

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }

  validate(control: AbstractControl): ValidationErrors | null {
    const names = control.value;
    if (names?.length <= 0) {
      return {
        required: { names }
      }
    } else {
      return null;
    }
  }

  writeValue(fileNames: string[]): void {
    this.fileNames = fileNames;
    this.previewImages = fileNames.map(item => {
      return {
        percent: '100%',
        complete: true,
        src: ("." + item).replace(".~/", "")
      }
    });
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  ngOnInit(): void {
  }

  public dropped(files: NgxFileDropEntry[]) {

    let count = this.fileNames.length;


    for (const droppedFile of files) {

      if (count >= this.maxFiles) {
        return;
      }
      count++;
      this.markAsTouched();

      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          let preview = {
            percent: '0',
            blob: URL.createObjectURL(file),
            src: "",
            complete: false
          }
          this.previewImages.push(preview);

          console.log(droppedFile.relativePath, file);

          const formData = new FormData()
          formData.append(file.name, file, droppedFile.relativePath)

          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.spinner.show(this.loadSpinner);

          this.http.post<HttpResponse<any>>(`${environment.apiUrl}${this.uploadUrl}?storageType=${this.storageType}`, formData,
            { headers: headers, reportProgress: true, observe: 'events' })
            .subscribe((res: any) => {

              if (res.type == HttpEventType.UploadProgress) {

                var perc = Math.round(res.loaded / (res.total ?? 1) * 100)
                preview.percent = perc + '%';
                preview.complete = perc == 100;
                console.log(preview.percent);

              } else if (res.type == HttpEventType.Response) {

                let src = res.body.Data.Result;

                preview.complete = true;
                preview.src = ("." + src).replace('.~/', '');

                this.fileNames.push(src);

                this.spinner.hide(this.loadSpinner);
              }
            })

        });
      } else {

        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;

        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  removeFile(event: Event, idx: number) {

    event.preventDefault();
    event.stopPropagation();

    this.spinner.show(this.loadSpinner);

    this.http.delete(`${environment.apiUrl}/product/delete-image?imageUrl=${this.fileNames[idx]}`)
      .subscribe(() => {

        this.spinner.hide(this.loadSpinner);

        this.previewImages.splice(idx, 1);
        this.fileNames.splice(idx, 1);
      });
  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }

}
