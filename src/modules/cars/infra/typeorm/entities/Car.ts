import { Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Category } from "./Category";

class Car {
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  daily_rate: string;

  @Column()
  available: true;

  @Column()
  license_plate: string;

  @Column()
  fine_amount: number;

  @Column()
  brand: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @Column()
  category_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Car };
