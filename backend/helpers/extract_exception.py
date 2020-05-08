import re


def extract_exception(ex: Exception or str):
    # Dissect response
    exception_parts = str(ex).split(":")

    # Dissect parts
    exception_code: str = re.sub(r" \w+", "", exception_parts[0])
    exception_title: str = re.sub(r"\d+", "", exception_parts[0]).strip()
    exception_description: str = exception_parts[1].strip()

    # Return data object
    return {
        "code": exception_code,
        "title": exception_title,
        "description": exception_description,
    }
