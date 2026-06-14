export interface CodeLine {
  text: string;
  type: 'keyword' | 'comment' | 'string' | 'function' | 'variable' | 'plain';
}

export interface TerminalMessage {
  id: string;
  lines: CodeLine[];
}

export interface DataPoint {
  label: string;
  value: number;
  color: string;
}

export interface MetricData {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: 'up' | 'down';
}

export interface ConnectionPath {
  from: { x: number; y: number };
  to: { x: number; y: number };
  color: string;
}
