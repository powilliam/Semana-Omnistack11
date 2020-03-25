import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Organization } from './Organization'

@Entity()
export class Incident {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false })
  title: string

  @Column({ nullable: false })
  description: string

  @Column({ nullable: false })
  value: number

  @ManyToOne((type) => Organization, (organization) => organization.incidents)
  organization: Organization
}
