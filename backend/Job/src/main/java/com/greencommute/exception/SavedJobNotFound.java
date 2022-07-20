package com.greencommute.exception;

public class SavedJobNotFound extends RuntimeException{
    public SavedJobNotFound(String message) {
        super(message);
    }

    public SavedJobNotFound(String message, Throwable cause) {
        super(message, cause);
    }

    public SavedJobNotFound(Throwable cause) {
        super(cause);
    }
}
