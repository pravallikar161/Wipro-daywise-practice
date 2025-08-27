import { Component } from '@angular/core';
import { Ivechile } from '../ivechile';
import { Vechileservice } from '../vechileservice';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vechilecomp',
  imports: [FormsModule, CommonModule],
  templateUrl: './vechilecomp.html',
  styleUrl: './vechilecomp.css',
})
export class Vechilecomp {
  constructor(private vechileService: Vechileservice, private cdr: ChangeDetectorRef) {}

  vechiles: Ivechile[] = [];

  vechileEdit: Ivechile = {
    id: '',
    make: '',
    model: '',
    fuelType: '',
    price: 0,
  };
  vechileAdd: Ivechile = {
    id: '',
    make: '',
    model: '',
    fuelType: '',
    price: 0,
  };

  ngOnInit() {
    this.vechileService.getVechiles().subscribe(
      (data: Ivechile[]) => {
        this.vechiles = data;
        this.cdr.detectChanges();
        console.log(data);
      },
      (error) => {
        console.error('Error fetching vechile : ', error);
      }
    );
  }

  edit(vechileId: string) {
    console.log(vechileId);
    this.vechileService.getVechileById(vechileId).subscribe(
      (vechile: Ivechile) => {
        console.log('Vechile details', vechile);
        this.vechileEdit = vechile;
        console.log('Vechile details after editing', vechile);
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fectching Vechicle by ID: ', error);
      }
    );
  }

  update() {
    this.vechileService.updateVechile(this.vechileEdit).subscribe(
      (updatedVechile: Ivechile) => {
        console.log('Vechile updated successfully : ', updatedVechile);

        const index = this.vechiles.findIndex((vechile) => vechile.id === updatedVechile.id);

        if (index !== -1) {
          this.vechiles[index] = updatedVechile;
        }
        this.vechileEdit = {
          id: '',
          make: '',
          model: '',
          fuelType: '',
          price: 0,
        };
        this.cdr.detectChanges();
        this.ngOnInit();
      },
      (error) => {
        console.error('Error Updating Vechile : ', error);
      }
    );
  }

  delete(vechileId: string) {
    this.vechileService.deleteVechile(vechileId).subscribe(
      () => {
        this.vechiles = this.vechiles.filter((vechile) => vechile.id !== vechileId);

        this.cdr.detectChanges();
        this.ngOnInit();
      },
      (error) => {
        console.error('Error deleting vechile:', error);
      }
    );
  }

  save() {
    this.vechileService.saveVechile(this.vechileAdd).subscribe(
      (newVechile: Ivechile) => {
        this.vechiles.push(newVechile);
        this.vechileAdd = {
          id: '',
          make: '',
          model: '',
          fuelType: '',
          price: 0,
        };

        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error saving vechile : ', error);
      }
    );
  }
}
