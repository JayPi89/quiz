import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-database-page',
  templateUrl: './database-page.component.html',
  styleUrls: ['./database-page.component.scss']
})
export class DatabasePageComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string[] = ['flag', 'name', 'capital', 'citizens', 'areasquarekm', 'citizenspersquarekm'];
  dataSource = new MatTableDataSource<Country>();
  resultsLength: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  countries?: Country[];
  currentCountry: Country = {} as Country;
  currentIndex = -1;
  title = '';

  constructor(private countryService: CountryService) { }

  refreshTableData(data: Country[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.sort.sort(({ id: 'name', start: 'asc'}) as MatSortable);
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.retrieveTutorials();
  }
  
  ngAfterViewInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  retrieveTutorials(): void {
    this.countryService.getAll()
      .subscribe({
        next: (data) => {
          this.refreshTableData(data);
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  sortData(sort: Sort) {
    this.dataSource.sort = this.sort;
  }

/**

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  */
}
