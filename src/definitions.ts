export interface CITBRecorderPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
