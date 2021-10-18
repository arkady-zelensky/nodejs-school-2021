import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: 'channels' })
export class ChannelEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  description: string;

  @Column({ type: 'varchar', length: 80, nullable: false })
  photo_url: string;

  @Column({ type: 'date', nullable: false, default: () => 'CURRENT_DATE' })
  created_at: Date;
}
