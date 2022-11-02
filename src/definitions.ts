export interface CITBRecorderPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  start(options: { name: string, user: string }): Promise<{ status: boolean }>;
  stop(): Promise<{ status: boolean }>;
  pin(options: { position: number }): Promise<{ status: boolean }>;

}
