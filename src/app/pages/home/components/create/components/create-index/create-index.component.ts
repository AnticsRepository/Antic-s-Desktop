import { Component, OnInit } from '@angular/core';
import { CreatorService } from '../../services/creator.service';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromDrafts from '@app/core/ngrx/selectors/draft.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil, switchMap } from 'rxjs/operators';
import { Subject, of } from 'rxjs';
import { Article } from '@app/shared/interfaces/interfaces';
import * as DraftActions from '@app/core/ngrx/actions/draft.actions';

@Component({
  selector: 'app-create-index',
  templateUrl: './create-index.component.html',
  styleUrls: ['./create-index.component.scss']
})

export class CreateIndexComponent implements OnInit {

  markdown: string = '';
  draft: Article = {};
  private unsubscribe$ = new Subject<void>();

  constructor(private creator: CreatorService,
              private store: Store<AppState>,
              public activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.checkDraftLoader();
  }

  public change(value: string): void {
    this.creator.makeChange(value);
  }

  private checkDraftLoader(): void {
    this.activatedRoute.paramMap
    .pipe(
      takeUntil(this.unsubscribe$),
      switchMap(() => {
        return window.history.state.loadDraft ?
        this.store.select(fromDrafts.getDraft) :
        of(null)
      }))
      .subscribe((res: Article) => {
        if (res) {
          this.draft = res;
          this.markdown = res.message;
        }
      });
  }

  public goNext(): void {
    if (this.markdown.length < 20) { return; }
    this.draft.message = this.markdown;
    this.store.dispatch(DraftActions.saveDraft({draft: this.draft}));
    this.router.navigateByUrl('/home/create-confirm');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
