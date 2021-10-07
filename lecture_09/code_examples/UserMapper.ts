export class UserMapper {
  public static toDTO(userEntity: UserEntity): DSUserDTO {
    const { firstName, userEntityId, lastName } = userEntity;

    return {
      id: userEntityId,
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
      userEntityId: id,
      firstName,
      lastName,
    };
  }
}
