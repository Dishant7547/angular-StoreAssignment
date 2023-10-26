//did try a different approach:
//require was : component should be displayed first, and when clicked and rendered, it should go back to wherever it came from.

//store all urls that user will explore, and when called our component, check the last url, and jump user onto that url.
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlHistoryService {
  private visitedUrls: string[] = [];

  addUrl(url: string) {
    this.visitedUrls.push(url);
    localStorage.setItem('visitedUrls', JSON.stringify(this.visitedUrls));
  }

  getVisitedUrls() {
    return JSON.parse(localStorage.getItem('visitedUrls') || '[]');
  }
}
