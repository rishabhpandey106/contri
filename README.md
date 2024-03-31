# Contri

Contri is a project designed for educational purposes to simulate fake contributions on GitHub profiles. This project is intended to help users understand how contribution graphs work on GitHub and practice making commits in a controlled environment.

## Purpose

The main purpose of Contri is to provide a learning platform for users who want to:

- Learn about GitHub contribution graphs and how commits affect them.
- Practice making commits and understanding their impact on contribution graphs.
- Experiment with commit dates and messages to see how they appear on the GitHub profile.

## Disclaimer

Please note the following points regarding the use of Contri:

- Contri is solely for educational and learning purposes.
- Contri generates fake commits that do not represent real contributions to projects.
- Contri should not be used to misrepresent actual contributions on GitHub profiles.
- Users of Contri are responsible for using it ethically and in compliance with GitHub's terms of service.

## Getting Started

To use Contri, follow these steps:

1. First create a github repo for this project where all your fake commits will be committed and initialized git in your project.
 ```bash
  Run commands -
  - git init
  - git remote add origin <your-repo-hhtp>
  ```
2. Clone the Contri repository to your local machine.
3. Install any dependencies required by Contri (if applicable).
4. Install all the libraries by `npm i` command.
5. Create `.env` file and save `MONGO_URL` in it.
6. Run command `npm run dev`.
7. Use Contri to simulate fake commits on your GitHub profile.
8. Experiment with different commit messages, dates, and frequencies.

## Note

1. by default it has rangle for ! year for fake commits , so if your account is not even a year old it wont work.
2. So according to when your account was made , you can alter the code in `/src/app/api/magic/route.js` having line
   ```bash
    const x = random(0, 10);
    const y = random(0, 10);
    const date = moment().subtract(8 , "w").add(x , "d").add(y , "d").format();
   ```

## Contributing

If you find any issues or have suggestions for improving Contri, feel free to contribute by:

1. Opening an issue to report a bug or suggest an enhancement.
2. Forking the Contri repository, making changes, and submitting a pull request.

## License

Contri is licensed under the [MIT License](LICENSE.md). See the LICENSE file for more details.

## Contact

For any questions or inquiries about Contri, you can reach out to the project maintainer at [MAIL HERE](mailto:rishabhpandey230@.com).
