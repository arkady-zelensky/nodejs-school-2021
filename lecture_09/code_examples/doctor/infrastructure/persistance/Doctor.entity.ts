import {
  Entity,
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { AddressEntity } from "./doctorAddress/Address.entity";

@Entity({ name: "Practitioner" })
export class DoctorEntity {
  @PrimaryGeneratedColumn("uuid", { name: "PractitionerId" })
  practitionerId: string;

  @Column({
    type: "uuid",
    name: "PractitionerEntityId",
    default: () => "NEWID()",
  })
  practitionerEntityId: string;

  @Column({
    default: true,
    name: "IsLatest",
  })
  isLatest: boolean;

  @Column({ name: "FirstName" })
  firstName: string;

  @Column({ name: "LastName" })
  lastName: string;

  @Column({ name: "MiddleName", nullable: true })
  middleName?: string;

  @Column({ name: "Gender" })
  gender: number;

  @Column({ name: "AddressId", type: "uuid" })
  addressId: string;

  @ManyToOne(() => AddressEntity, {
    cascade: ["insert", "update"],
    eager: true,
  })
  @JoinColumn({ name: "AddressId" })
  address: AddressEntity;

  @DeleteDateColumn({
    type: "datetimeoffset",
    name: "DeletedAt",
    nullable: true,
  })
  deletedAt: Date | null;

  @CreateDateColumn({ type: "datetimeoffset", name: "CreatedAt" })
  createdAt: Date;

  @UpdateDateColumn({ type: "datetimeoffset", name: "ModifiedAt" })
  modifiedAt: Date;

  @Column({ name: "Version", default: 1 })
  version: number;
}
