import cv2
import time

# Take a picture for verification
cam = cv2.VideoCapture(1)
cv2.namedWindow("Verification")
ret, frame = cam.read()
cv2.imwrite("verification.jpg", frame)
cam.release()

# Get the alarm time from user
alarm_time = input("Enter alarm time in seconds: ")
alarm_time = int(alarm_time)

# Start the alarm and ask for verification
start_time = time.time()
while time.time() - start_time < alarm_time:
    # Check if verification picture matches the original picture
    cam = cv2.VideoCapture(0)
    cv2.namedWindow("Verification")
    ret, frame = cam.read()
    cv2.imwrite("current.jpg", frame)
    cam.release()
    if cv2.imread("verification.jpg").shape != cv2.imread("current.jpg").shape:
        print("Verification failed!")
    else:
        difference = cv2.subtract(cv2.imread("verification.jpg"), cv2.imread("current.jpg"))
        b, g, r = cv2.split(difference)
        if cv2.countNonZero(b) == 0 and cv2.countNonZero(g) == 0 and cv2.countNonZero(r) == 0:
            print("Verification successful!")
            break
    time.sleep(1)

print("Alarm ringing!")
