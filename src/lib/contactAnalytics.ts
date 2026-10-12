type ContactEvent = 'project_selected' | 'review_selected' | 'started' | 'validation_error' | 'submit' | 'success' | 'error';
export type ContactIntent = 'project' | 'review';

export function trackContactEvent(event: ContactEvent, intent: ContactIntent) {
  if (typeof window === 'undefined' || !['eldarvisual.com', 'www.eldarvisual.com'].includes(window.location.hostname)) return;
  const clarityWindow = window as typeof window & { clarity?: (command: string, value: string) => void };
  clarityWindow.clarity?.('event', `contact_${intent}_${event}`);
}
