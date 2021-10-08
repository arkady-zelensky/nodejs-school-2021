import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Address" })
export class AddressEntity {
  @PrimaryGeneratedColumn("uuid", { name: "AddressId" })
  addressId: string;

  @Column({ nullable: true, name: "Line" })
  line: string;

  @Column({ nullable: true, name: "City" })
  city: string;
}
