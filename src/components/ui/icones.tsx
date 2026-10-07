export type IconName =
  | "arrow"
  | "chev"
  | "search"
  | "menu"
  | "close"
  | "play"
  | "factory"
  | "people"
  | "pin"
  | "state"
  | "press"
  | "user"
  | "medal"
  | "bus"
  | "repas"
  | "sante"
  | "coeur"
  | "etudes";

/** Pictogramme au trait fin, tiré de la planche <Sprite /> rendue une fois par page. */
export function Icon({ name }: { name: IconName }) {
  return (
    <svg className="ico" aria-hidden="true" focusable="false">
      <use href={`#i-${name}`} />
    </svg>
  );
}

export function Sprite() {
  return (
    <svg className="planche" width="0" height="0" aria-hidden="true" focusable="false">
      <symbol id="i-arrow" viewBox="0 0 24 24">
        <path d="M4 12h15M13 6l6 6-6 6" />
      </symbol>
      <symbol id="i-chev" viewBox="0 0 24 24">
        <path d="m6 9 6 6 6-6" />
      </symbol>
      <symbol id="i-search" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="6.5" />
        <path d="m20 20-4.2-4.2" />
      </symbol>
      <symbol id="i-menu" viewBox="0 0 24 24">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </symbol>
      <symbol id="i-close" viewBox="0 0 24 24">
        <path d="M6 6l12 12M18 6 6 18" />
      </symbol>
      <symbol id="i-play" viewBox="0 0 24 24">
        <path d="M8 5.2v13.6L19.5 12z" />
      </symbol>
      <symbol id="i-factory" viewBox="0 0 24 24">
        <path d="M3 20.5V11l5.5 3.4V11l5.5 3.4V4.5h4.5v16z" />
        <path d="M3 20.5h18M7 17.5h1.5M12 17.5h1.5" />
      </symbol>
      <symbol id="i-people" viewBox="0 0 24 24">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M2.8 20c0-3.4 2.8-6.2 6.2-6.2s6.2 2.8 6.2 6.2" />
        <circle cx="17.2" cy="9.2" r="2.4" />
        <path d="M16.4 14.1c2.7.4 4.8 2.8 4.8 5.9" />
      </symbol>
      <symbol id="i-pin" viewBox="0 0 24 24">
        <path d="M12 21s7-6.2 7-11.6A7 7 0 0 0 5 9.4C5 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </symbol>
      <symbol id="i-state" viewBox="0 0 24 24">
        <path d="M3 9.5 12 4l9 5.5M5 10.5v7.5M9.6 10.5v7.5M14.4 10.5v7.5M19 10.5v7.5M3 20.5h18" />
      </symbol>
      <symbol id="i-press" viewBox="0 0 24 24">
        <path d="M4 4.5h12.5v15H6a2 2 0 0 1-2-2z" />
        <path d="M16.5 8.5H20v9a2 2 0 0 1-2 2h-1.5M7.5 8.5h5.5M7.5 12h5.5M7.5 15.5h3.5" />
      </symbol>
      <symbol id="i-user" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="3.6" />
        <path d="M4.8 20.5c0-4 3.2-7.2 7.2-7.2s7.2 3.2 7.2 7.2" />
      </symbol>
      <symbol id="i-bus" viewBox="0 0 24 24">
        <path d="M4.5 4.5h15v12h-15zM4.5 11h15M7.5 16.5v2.5M16.5 16.5v2.5M8 13.8h.5M15.5 13.8h.5" />
      </symbol>
      <symbol id="i-repas" viewBox="0 0 24 24">
        <path d="M7 3.5v17M4.8 3.5v4.2a2.2 2.2 0 0 0 4.4 0V3.5M16.5 3.5c-1.8 1.3-2.7 3.4-2.7 6.2v2.3h2.7zM16.5 12v8.5" />
      </symbol>
      <symbol id="i-sante" viewBox="0 0 24 24">
        <path d="M4.5 4.5h15v15h-15z" />
        <path d="M12 8.5v7M8.5 12h7" />
      </symbol>
      <symbol id="i-coeur" viewBox="0 0 24 24">
        <path d="M12 20s-7.5-4.5-7.5-10.2A4.1 4.1 0 0 1 12 7.4a4.1 4.1 0 0 1 7.5 2.4C19.5 15.5 12 20 12 20z" />
      </symbol>
      <symbol id="i-etudes" viewBox="0 0 24 24">
        <path d="M2.5 9.5 12 5.5l9.5 4L12 13.5z" />
        <path d="M6.5 11.5v4.2c1.5 1.4 3.4 2 5.5 2s4-.6 5.5-2v-4.2M21.5 9.5V15" />
      </symbol>
      <symbol id="i-medal" viewBox="0 0 24 24">
        <circle cx="12" cy="14.5" r="5" />
        <path d="M9.2 10.3 6.5 3.5h4L12 7.2l1.5-3.7h4l-2.7 6.8M12 12.4v4.2M9.9 14.5h4.2" />
      </symbol>
    </svg>
  );
}
