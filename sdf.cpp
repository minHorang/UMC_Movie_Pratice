#include<iostream>
#include<string>
using namespace std;

int main(){
    string names[5];

    for(int i=0; i<5;i++){
        cout<<"이름>>";
        getline(cin,names[i],'\n');
    }
string latter = names[0];
for(int i=1;i<5;i++){
    if(latter<names[i]){
        latter = names[i];
    }
}
cout<<latter;
}