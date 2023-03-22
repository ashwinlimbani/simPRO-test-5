import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private trigger: Subject<any> = new Subject();
  webcamImage!: WebcamImage;
  private nextWebcam: Subject<any> = new Subject();
  image = '';
  showWebCam: boolean = false;

  ngOnInit() {
    // this.retrieveImage();
  }

  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }
  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }

  startCamera(): void {
    this.showWebCam = true;
  }

  getSnapshot(): void {
    this.trigger.next(void 0);
  }

  captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    localStorage.setItem('image', webcamImage!.imageAsDataUrl);
    this.retrieveImage();
  }

  retrieveImage() {
    this.image = localStorage.getItem('image') as string;
  }
}
