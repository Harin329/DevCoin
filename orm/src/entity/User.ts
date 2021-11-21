import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class UserMapping {
  @PrimaryColumn()
  github_id: string;

  @Column()
  network_address: string;
}
