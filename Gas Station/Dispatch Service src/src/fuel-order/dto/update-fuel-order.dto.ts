import { PartialType } from '@nestjs/mapped-types';
import { CreateFuelOrderDto } from './create-fuel-order.dto';

export class UpdateFuelOrderDto extends PartialType(CreateFuelOrderDto) {}
