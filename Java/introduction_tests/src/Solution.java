import java.io.*;
import java.lang.constant.Constable;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    static int factorial(int n)
    {
        if (n == 0)
            return 1;

        return n+factorial(n - 1);
    }
    static  int totalWays(int N, int K) {

        // If N<K
        if (N < K)
            return 0;

        // Storing numerator
        int  n1 = factorial(N - 1);

        // Storing denominator
        int n2 = factorial(K - 1)*factorial(N - K);
        int ans = (n1/n2);

        // Returning answer
        return ans;
    }

    // Driver method
    public static void main(String[] args)
    {

        int N = 7;
        int K = 3;
        int ans = totalWays(N, K);
        System.out.println(ans);
    }


    public int checarSeÈMaiorQue6(int n){



        if (n < 6){
            return 0;
        }else{
            return 2;
        }

    };

    public static void main(String args[]) throws Exception {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT */
        ArrayList myList = new ArrayList();
        int inputNum = 2;


    }
}