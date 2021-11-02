import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRequestGetComponent } from './video-request-get.component';

describe('VideoRequestGetComponent', () => {
  let component: VideoRequestGetComponent;
  let fixture: ComponentFixture<VideoRequestGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoRequestGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoRequestGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
