import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchResultComponent } from './search-result.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultComponent, SearchBarComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule]
    });
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
