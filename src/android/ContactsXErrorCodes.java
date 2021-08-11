package de.einfachhans.ContactsX;

public enum ContactsXErrorCodes {
    UnsupportedAction(1),
    WrongJsonObject(2),
    PermissionDenied(3),
    TooShort(4),
    MultipleDeleted(5),
    UnknownError(10);

    public final int value;

    ContactsXErrorCodes(int value) {
        this.value = value;
    }
}
