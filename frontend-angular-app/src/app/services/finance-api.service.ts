import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceApiService {
  private baseUrl = 'https://www.alphavantage.co';
  private apikey = 'demo'; //F9ED3D6RW1UFG0LN

  // Top losers and winners
  private MARKET_STATUS_URL: string = `${this.baseUrl}/query?function=MARKET_STATUS&apikey=${this.apikey}`;
  // Top losers and winners
  private LOSER_WINNER_URL: string = `${this.baseUrl}/query?function=TOP_GAINERS_LOSERS&apikey=${this.apikey}`;
  // real gdp data
  private REAL_GRP_URL: string = `${this.baseUrl}/query?function=REAL_GDP&interval=annual&apikey=${this.apikey}`;
  // company Overviewe
  private COMPANY_OVERVIEW_URL = `${this.baseUrl}/query?function=OVERVIEW&symbol=IBM&apikey=demo`;
  

  constructor(private http: HttpClient) {}

  getLatestMarketSentiment(): Observable<any> {
    const url = `${this.MARKET_STATUS_URL}`;
    return this.http.get(url);
  }

  getRealGDPData(): Observable<any> {
    const url = `${this.REAL_GRP_URL}`;
    return this.http.get(url);
  }

  getLoserAndWinner(): Observable<any> {
    const url = `${this.LOSER_WINNER_URL}`;
    return this.http.get(url);
  }

  getCompanyOverview(symbol: string): Observable<any> {
    const url = `${this.baseUrl}/query?function=OVERVIEW&symbol=IBM&apikey=${this.apikey}`;
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

