import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1displaylist',
  imports: [],
  templateUrl: './ex1displaylist.html',
  styleUrl: './ex1displaylist.css',
})
export class Ex1displaylist {
  fruitsList = [
    {
      name: 'Mango',
      img: 'https://i.pinimg.com/736x/00/08/d9/0008d9cf34b03fa7a7eb3c1a95b2e78e.jpg',
      description: 'Mango is yellow in color',
    },
    {
      name: 'Grapes',
      img: 'https://media.istockphoto.com/id/489520104/photo/green-grape-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9kg_3pMeBKYnHHjx2JECF61QwzxTikLaQ2w-6A5tOO0=',
      description: 'Grapes are green in color',
    },
    {
      name: 'Banana',
      img: 'https://thumbs.dreamstime.com/b/bunch-bananas-6175887.jpg',
      description: 'Banana is yellow in color',
    },
    {
      name: 'Orange',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsa3K1PkfEgVzc6JeayE-uGwejpsBDBbVBUw&s',
      description: 'Orange is orange in color',
    },
    {
      name: 'Apple',
      img: 'https://www.jiomart.com/images/product/original/590000002/apple-red-delicious-1-kg-product-images-o590000002-p590000002-1-202409171905.jpg?im=Resize=(420,420)',
      description: 'Apple is red in color',
    },
    {
      name: 'Pineapple',
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg',
      description: 'Pineapple is yellow in color',
    },
    {
      name: 'Strawberry',
      img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg',
      description: 'Strawberry is red in color',
    },
    {
      name: 'Watermelon',
      img: 'https://media.istockphoto.com/id/1142119394/photo/whole-and-slices-watermelon-fruit-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=A5XnLyeI_3mwkCNadv-QLU4jzgNux8kUPfIlDvwT0jo=',
      description: 'Watermelon is green outside and red inside',
    },
    {
      name: 'Papaya',
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Papaya_cross_section_BNC.jpg',
      description: 'Papaya is orange inside',
    },
    {
      name: 'Kiwi',
      img: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg',
      description: 'Kiwi is brown outside and green inside',
    },
  ];
}
