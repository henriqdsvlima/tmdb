import { ApiError, ErrorCode } from '../../models/errors';

export class ErrorService {

  getErrorMessage(code: ErrorCode): string {
    switch (code) {
      case ErrorCode.SUCCESS:
        return 'Success.';
      case ErrorCode.INVALID_SERVICE:
        return 'Invalid service: this service does not exist.';
      // ... e assim por diante para todos os códigos de erro.
      default:
        return 'An unknown error occurred.';
    }
  }
}
