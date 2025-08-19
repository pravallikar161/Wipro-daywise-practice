import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtered-names',
  imports: [FormsModule],
  templateUrl: './filtered-names.html',
  styleUrl: './filtered-names.css',
})
export class FilteredNames {
  // Exercise-14
  searchText: string = '';
  namesList: string[] = ['Jayanta', 'Jayaram', 'Amit', 'Jhon', 'Jack', 'Ram', 'Rahul'];
  filteredNames: string[] = [...this.namesList];

  onTextChange() {
    const search = this.searchText.toLowerCase().trim();

    if (!search) {
      this.filteredNames = [...this.namesList];
      return;
    }

    this.filteredNames = this.namesList.filter((name) => name.toLowerCase().startsWith(search));
  }
}
