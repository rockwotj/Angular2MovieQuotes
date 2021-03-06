import {Component} from "angular2/core";
import {TitleComponent} from "./title.component";
import {AddQuoteComponent} from "./add_quote.component";
import {QuoteTableComponent} from "./quote_table.component";
import {MovieQuotesService} from "./moviequotes.service";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [TitleComponent, AddQuoteComponent, QuoteTableComponent],
  providers: [MovieQuotesService],
})
export class AppComponent {

  onAddQuoteEvent(mq) {
    var quotesRef = new Firebase("https://fisherds-movie-quotes.firebaseio.com/quotes");
    quotesRef.push(mq);
  }
}
