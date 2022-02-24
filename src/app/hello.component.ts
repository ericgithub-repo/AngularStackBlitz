import { Component, OnInit, Input } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './app.hello.html',
  providers: [HelloService],
  styleUrls: ['./app.component.css'],
})

export class HelloComponent implements OnInit {
  @Input() name: string;
  pcgList: string;

  constructor(private helloService: HelloService) {}

  ngOnInit() {
    this.getPcgList();
  }

  getPcgList(): void {
    this.helloService.getPCG().subscribe((pcg) => (this.pcgList = pcg));
  }
}
