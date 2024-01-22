import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY, AV_BASIC_URL, FUNCTIONS, INTERVAL } from '../models/enums/market/functions';

@Injectable({
  providedIn: 'root'
})
export class FinanceApiService {
  private MARKET_STATUS_URL = `${AV_BASIC_URL.BASIC}/query?function=${FUNCTIONS.MARKET_STATUS}&apikey=${API_KEY.DEMO}`
  private LOSER_WINNER_URL = `${AV_BASIC_URL.BASIC}/query?function=${FUNCTIONS.TOP_GAINERS_LOSERS}&apikey=${API_KEY.DEMO}`
  private REAL_GRP_URL = `${AV_BASIC_URL.BASIC}/query?function=${FUNCTIONS.REAL_GDP}&interval=${INTERVAL.ANNUAL}&apikey=${API_KEY.DEMO}`
  

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

  getCompanyInformation(symbol: string, functionCall: FUNCTIONS): Observable<any> {
    const url = `${AV_BASIC_URL.BASIC}/query?function=${functionCall}&symbol=${symbol}&apikey=${API_KEY.DEMO}`;
    return this.http.get(url);
  }

  getCompanyIncomeStatement(symbol: string): Observable<any> {
    const url = `${AV_BASIC_URL.BASIC}/query?function=${FUNCTIONS.INCOME_STATEMENT}&symbol=${symbol}&apikey=${API_KEY.DEMO}`;
    return this.http.get(url);
  }

  getCompanyStockData(symbol: string): Observable<any> {
    const url = `${AV_BASIC_URL.BASIC}/query?function=${FUNCTIONS.TIME_SERIES_INTRADAY}&symbol=${symbol}&apikey=${API_KEY.DEMO}`;
    return this.http.get(url);
  }

  getCompanyOverview(symbol: string): Observable<any> {
    const url = `${AV_BASIC_URL.BASIC}/query?function=${FUNCTIONS.OVERVIEW}&symbol=${symbol}&apikey=${API_KEY.DEMO}`;
    return this.http.get(url);
  }

  getCompanyGlobalQuote(symbol: string): Observable<any> {
    const url = `${AV_BASIC_URL.BASIC}/query?function=${FUNCTIONS.GLOBAL_QUOTE}&symbol=${symbol}&apikey=${API_KEY.DEMO}`;
    return this.http.get(url);
  }
}
