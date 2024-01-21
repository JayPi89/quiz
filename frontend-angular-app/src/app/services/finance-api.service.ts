import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceApiService {
  private baseUrl = 'https://www.alphavantage.co';
  private apikey = 'demo';

  // Top losers and winners
  private marketStatus: string = `${this.baseUrl}/query?function=MARKET_STATUS&apikey=${this.apikey}`;
  // Top losers and winners
  private loserAndWinner: string = `${this.baseUrl}/query?function=TOP_GAINERS_LOSERS&apikey=${this.apikey}`;
  // real gdp data
  private real_gdp: string = `${this.baseUrl}/query?function=REAL_GDP&interval=annual&apikey=${this.apikey}`;
  

  constructor(private http: HttpClient) {}

  getLatestMarketSentiment(): Observable<any> {
    const url = `${this.marketStatus}`;
    return this.http.get(url);
  }

  getRealGDPData(): Observable<any> {
    const url = `${this.real_gdp}`;
    return this.http.get(url);
  }

  getLoserAndWinner(): Observable<any> {
    const url = `${this.loserAndWinner}`;
    return this.http.get(url);
  }

  getCurrentStockPrice(symbol: string): Observable<any> {
    const url = `${this.baseUrl}/stock/${symbol}/current`;
    return this.http.get(url);
  }

  getHistoricalStockPrices(symbol: string): Observable<any> {
    const url = `${this.baseUrl}/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${this.apikey}`;
    return this.http.get(url);
  }
}

