import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { UserService } from 'src/app/services/auth/user.service';
import { ISymbol, SYMBOLS } from 'src/app/services/symbols';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() isExpandedEvent = new EventEmitter<boolean>();
  isExpanded: boolean = false;
  isLoggedIn: boolean = false;
  name: string;

  control = new FormControl<string | ISymbol>('');
  symbols: ISymbol[] = SYMBOLS
  filteredSymbols: Observable<ISymbol[]>;

  constructor(private userService: UserService) { 
    
  }

  displayWith(option: ISymbol) {
    return option.name;
  }

  ngOnInit(): void {
    this.filteredSymbols = this.control.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        if (typeof value === 'string') {
          if(name && name?.length < 3 || "") {
            return [];
          }
        }
        return name ? this._filter(name as string) : this.symbols.slice();
      }),
    );
  }

  private _filter(value: string): ISymbol[] {
    const filterValue = this._normalizeValue(value);
    return this.symbols.filter(symbol => (this._normalizeValue(symbol.name).includes(filterValue) || this._normalizeValue(symbol.symbol).includes(filterValue)));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
    this.isExpandedEvent.emit(this.isExpanded);
  }

  loginUser(username: string) {
    this.userService.logUserIn(username);
    this.name = this.name;
    this.isLoggedIn = true;
  }

}
