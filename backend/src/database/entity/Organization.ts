import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Incident } from './Incident'

@Entity()
export class Organization {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false, unique: true })
  identification: string

  @Column({ nullable: false, unique: true })
  name: string

  @Column({ nullable: false, unique: true })
  email: string

  @Column({ nullable: false, unique: true })
  whatsapp: string

  @Column({ nullable: false })
  city: string

  @Column({ length: 2, nullable: false })
  uf: string

  @OneToMany((type) => Incident, (incident) => incident.organization)
  incidents: Incident[]
}
