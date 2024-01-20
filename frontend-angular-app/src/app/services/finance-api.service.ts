import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceApiService {
  private baseUrl = 'https://www.alphavantage.co';

  constructor(private http: HttpClient) {}

  getLatestMarketSentiment(): Observable<any> {
    const url = `${this.baseUrl}/query?function=MARKET_STATUS&apikey=demo`;
    return this.http.get(url);
  }

  getCurrentStockPrice(symbol: string): Observable<any> {
    const url = `${this.baseUrl}/stock/${symbol}/current`;
    return this.http.get(url);
  }

  getHistoricalStockPrices(symbol: string): Observable<any> {
    const url = `${this.baseUrl}/stock/${symbol}/history`;
    return this.http.get(url);
  }
}

