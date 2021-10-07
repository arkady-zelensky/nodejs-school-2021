export class UserMapper {
  public static toDTO(userEntity: UserEntity): DSUserDTO {
    const { firstName, practitionerEntityId, lastName } = userEntity;

    return {
      id: practitionerEntityId,
      firstName,
      lastName,
    };
  }

  public static toNewEntity(createData: DSUserCreateData): NewUserEntity {
    const { lastName, firstName } = createData;

    return {
      firstName,
      lastName,
    };
  }

  public static toUpdateEntity(
    updateData: DSUserUpdateData
  ): UpdatableUserEntity {
    const { id, lastName, firstName } = updateData;

    return {
      practitionerEntityId: id,
      firstName,
      lastName,
    };
  }
}
