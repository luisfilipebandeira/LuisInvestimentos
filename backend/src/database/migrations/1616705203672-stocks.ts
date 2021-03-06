import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class stocks1616705203672 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'stocks',
                columns: [{
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },{
                    name: "name",
                    type: "varchar",
                    isNullable: false
                },{
                    name: "value",
                    type: "decimal",
                    isNullable: false,
                    precision: 10,
                    scale: 2,
                },{
                    name: "quantity",
                    type: "decimal",
                    isNullable: false,
                    precision: 10,
                    scale: 2,
                },{
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },{
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('stocks')
    }

}
