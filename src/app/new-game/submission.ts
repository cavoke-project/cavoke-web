export class Submission {

  constructor(
    public id: string,
    public display_name: string,
    public description: string,
    public package_type: string,
    public git_repo: string | null,
    public server_file: File | null,
    public client_file: File | null
  ) {
  }
  package_types = ['Git Repository', 'Zip Archive']
}
