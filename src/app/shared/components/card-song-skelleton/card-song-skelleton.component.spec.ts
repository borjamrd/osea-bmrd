import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSongSkelletonComponent } from './card-song-skelleton.component';

describe('CardSongSkelletonComponent', () => {
  let component: CardSongSkelletonComponent;
  let fixture: ComponentFixture<CardSongSkelletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSongSkelletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSongSkelletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
