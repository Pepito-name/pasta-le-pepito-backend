import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export const IsOptionalEnum = (
  entity: object,
  validationOptions?: ValidationOptions,
) => {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'isOptionalEnum',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value === undefined || value === null) {
            return true;
          }
          return Object.values(entity).includes(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a valid enum value or be empty`;
        },
      },
    });
  };
};
