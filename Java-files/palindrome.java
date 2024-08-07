public class palindrome {
    public static boolean isPalindrome(int num) {
        if (num < 0) {
            return false;
        }
        String str = String.valueOf(num);
        System.out.println(str);
        for (int i = 0; i < str.length(); i++) {
            for (int j = str.length() - 1; j >= 0; j--) {
                if (str.charAt(i) != str.charAt(j)) {
                    return false;
                }
                break;
            }
        }
        return true;
    }
    public static void main(String[] Args) {
        System.out.println(isPalindrome(212));
    }
}