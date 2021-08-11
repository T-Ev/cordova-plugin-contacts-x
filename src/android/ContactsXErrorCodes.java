package de.einfachhans.ContactsX;

public enum ContactsXErrorCodes {
    UnsupportedAction(1),
    WrongJsonObject(2),
    PermissionDenied(3),
    NoContactFound(4),
    MultipleMatches(8),
    MatchFailed(10)
    UnknownError(13);

    public final int value;

    ContactsXErrorCodes(int value) {
        this.value = value;
    }
}
