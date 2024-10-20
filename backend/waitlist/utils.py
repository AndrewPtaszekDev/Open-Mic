import os

def get_password():
    file_path = os.path.join(os.path.dirname(__file__), "..", '..', "PASSWORD.txt")
    print(file_path)
    try:
        with open(file_path, "r") as file:
            password = file.readline().strip()
            return password
    except FileNotFoundError:
        print("The file 'PASSWORD.txt' was not found.")
        return None
