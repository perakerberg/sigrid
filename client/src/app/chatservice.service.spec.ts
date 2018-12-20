import { TestBed, inject } from '@angular/core/testing';

import { ChatService } from './chatservice.service';

describe('ChatserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatService]
    });
  });

  it('should be created', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));
});
